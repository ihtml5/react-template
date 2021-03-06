import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeHighIndex: -1
        }
        this.resetHighIndex = this.resetHighIndex.bind(this);
    }
    resetHighIndex(i) {
        this.setState(function(prevState, prevProps) {
            return {
                activeHighIndex: i === prevState.activeHighIndex ? -1 : i
            }
        });
    }
    getListItem(list) {
        const { isRouter, isIndexLink } = list;
        if (isRouter && isIndexLink) {
            return <IndexLink to={list.href} activeClassName="tu-menu-active">{list.text}</IndexLink>
        } else if (isRouter) {
            return <Link to={list.href} activeClassName="tu-menu-active">{list.text}</Link>;
        } else {
            return undefined;
        }
    }                    
    render() {
        const { title, list, isShow, index, resetActiveIndex, memoryIndex} = this.props;
        const { activeHighIndex } = this.state;
        return (
            <div className="base-accordionItem">
                <h3 className="base-accordionTitle" onClick={() => {
                    this.resetHighIndex(-1);
                    resetActiveIndex(index);
                }}>{title}</h3>
                {isShow ? <ul>
                    {list.map((list, i) => <li key={list.text}>{this.getListItem(list) ||  <a href={list.href} onClick={() => {
                    resetActiveIndex(index, i);
                    this.resetHighIndex(-1);
                }} style={ i.toString() === ((memoryIndex[0] === index && memoryIndex[1].toString()) || activeHighIndex.toString()) ? { color: '#000', fontWeight: '600'} : null}>{list.text}</a>}</li>)}
                </ul> : null}
            </div>
        );
    }
}

export default AccordionItem;