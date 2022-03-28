import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Navbar } from './components/navbar';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AboutUs } from './components/about';
import data from './data/images_en.json';
import { CardWrapper } from './components/card-wrapper';

test('renders App', () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const asd = getByText(/React. Components/i);
  expect(asd).toBeInTheDocument();
});

test('renders Navbar', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const asd = getByText(/React. Components/i);
  expect(asd).toBeInTheDocument();
});
test('renders About Us', () => {
  const { getByText } = render(
    <BrowserRouter>
      <AboutUs />
    </BrowserRouter>
  );
  const testElement = getByText(/Lorem ipsum dolor sit amet/i);
  expect(testElement).toBeInTheDocument();
});

describe('Card list', () => {
  data.forEach((listItem, i) => {
    it(`List item # ${i}`, () => {
      render(
        <BrowserRouter>
          <CardWrapper />
        </BrowserRouter>
      );

      expect(screen.getAllByText(`${listItem.name}`)[0]).toBeInTheDocument();
    });
  });
});
