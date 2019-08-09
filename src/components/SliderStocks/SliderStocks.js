import React from "react";

import {
  SliderStocksStyled,
  CardStocksStyled,
  List
} from "./SliderStocks.styled";

const SliderStocks = React.forwardRef(({ slides }, ref) => {
  const settings = {
    centerMode: true,
    slidesToShow: 3,
    arrows: false
  };

  return (
    <>
      {slides.length > 3 ? (
        <SliderStocksStyled {...settings} ref={ref}>
          {slides.map(stock => (
            <CardStocksStyled
              key={stock.id}
              image={stock.image}
              title={stock.title}
              text={stock.text}
            />
          ))}
        </SliderStocksStyled>
      ) : (
        <List>
          {slides.map(stock => (
            <CardStocksStyled
              key={stock.id}
              image={stock.image}
              title={stock.title}
              text={stock.text}
            />
          ))}
        </List>
      )}
    </>
  );
});

export default SliderStocks;
