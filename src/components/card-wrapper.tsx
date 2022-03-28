import { Component } from 'react';
import { priceGen } from '../data/price-gen';
import jsonData from '../data/images_en.json';
import { Card } from './card';

export class CardWrapper extends Component {
  state = {
    data: [],
    price: 100000,
  };

  componentDidMount() {
    this.setState({ data: jsonData });
  }

  render() {
    return (
      <div className="card-wrapper pad2">
        {this.state.data.map((e, i) => (
          <Card
            key={i}
            cardTitle={e.name}
            cardLinkText={``}
            cardImageUrl={`https://raw.githubusercontent.com/SergeyKagal/image-data/master/img/${e.imageNum}.jpg`}
            cardAuthor={e.author}
            cardYear={e.year}
            cardPrice={`${priceGen()} 000 $`}
          />
        ))}
      </div>
    );
  }
}
