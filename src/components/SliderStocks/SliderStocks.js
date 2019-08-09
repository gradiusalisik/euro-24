import React from "react";

// data
import { stocks } from "../../assets/dataJson/stocks";

import { SliderStocksStyled, CardStocksStyled } from "./SliderStocks.styled";

const SliderStocks = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 3
  };

  return (
    <SliderStocksStyled {...settings}>
      {stocks.map(stock => (
        <CardStocksStyled
          key={stock.id}
          image={stock.image}
          title={stock.title}
          text={stock.text}
        />
      ))}
    </SliderStocksStyled>
  );
};

export default SliderStocks;
