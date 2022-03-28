import { Component } from 'react';
import { ICard } from '../types/types';

export class Card extends Component<ICard> {
  render() {
    return (
      <div className="card hoverable">
        <div className="card-image">
          <img src={this.props.cardImageUrl} />
          <span className="card-title">{this.props.cardTitle}</span>
        </div>
        <div className="card-content">
          <div className="pic-author">
            Author <p className="orange-text text-lighten-1">{this.props.cardAuthor}</p>
          </div>
          <hr />
          <div className="pic-year">
            Year <span className="orange-text text-lighten-1">{this.props.cardYear}</span>
          </div>
          <hr />
          <div className="pic-price">
            Price <p className="orange-text text-lighten-1">{this.props.cardPrice}</p>
          </div>
        </div>
        {/* <div className="card-action">
          <a href="#">{this.props.cardLinkText}</a>
        </div> */}
      </div>
    );
  }
}
