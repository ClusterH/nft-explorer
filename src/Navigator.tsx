import { useEffect, useState, Fragment } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { RootState } from "./redux/store";
import useTokenByIndex from "./hooks/useTokenByIndex";
import useTotalSupply from "./hooks/useTotalSupply";
import { useSelector } from "react-redux";

const Navigator = () => {
  const activeContractAddress = useSelector(
    ({ contracts: { activeContractAddress } }: RootState) =>
      activeContractAddress
  );
  const dataByContract = useSelector(
    ({ contracts: { dataByContract } }: RootState) => dataByContract
  );
  const totalSupply = useTotalSupply(activeContractAddress);
  const [tokensByIndex] = useTokenByIndex(activeContractAddress, [0]);
  const initialValue = tokensByIndex ? tokensByIndex[0] : null;

  const [indicatorPosition, setIndicatorPosition] = useState({ x: 50, y: 0 });
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const fn = (e: any) => {
      const yPos =
        (window.scrollY / document.body.offsetHeight) * window.innerHeight;

      setScrollPercentage(window.scrollY / document.body.offsetHeight);
      setIndicatorPosition({ x: indicatorPosition.x, y: yPos });
    };

    window.addEventListener("scroll", fn);
    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, [indicatorPosition]);

  const numItems = 8;
  let chunks: number[] = [];
  if (
    totalSupply &&
    initialValue &&
    dataByContract[activeContractAddress] &&
    Object.values(dataByContract[activeContractAddress]).length
  ) {
    let increase = Math.floor(totalSupply.toNumber() / (numItems + 1));
    let items: any = [];
    for (let i = 1; i < numItems + 1; i++) {
      items = [
        ...items,
        items.length ? items[items.length - 1] + increase : increase
      ];
    }

    chunks = [
      initialValue.toNumber(),
      ...items,
      Object.keys(dataByContract[activeContractAddress])[
        Object.keys(dataByContract[activeContractAddress]).length - 1
      ]
    ];
  }

  const loadedUris =
    dataByContract &&
    dataByContract[activeContractAddress] &&
    Object.values(dataByContract[activeContractAddress]).every(
      (e: any) => e.uri
    );

  const isReady =
    loadedUris &&
    totalSupply &&
    initialValue &&
    dataByContract[activeContractAddress];
  const offset = 1000;
  let itemView = totalSupply ? totalSupply.toNumber() * scrollPercentage : 1;

  return isReady ? (
    <Fragment>
      <Flex
        position="fixed"
        right="0"
        top="0"
        width="70px"
        height="100vh"
        direction="column"
        justify="space-between"
      >
        {chunks.map((num, index) => {
          let growthPercentage: number | null = null;
          if (itemView >= num && itemView < num + offset) {
            growthPercentage = itemView === 0 ? 0 : (itemView - num) / offset;
          } else if (itemView <= num && itemView > num - offset) {
            growthPercentage = (num - itemView) / offset;
          }
          return (
            <Box
              key={index}
              textAlign="end"
              mr={2}
              fontSize={
                growthPercentage != null ? 20 - 10 * growthPercentage : 10
              }
            >
              {num}
            </Box>
          );
        })}
      </Flex>
      <Box
        display="none"
        position="fixed"
        fontSize={10}
        right={indicatorPosition.x}
        top={indicatorPosition.y}
      >
        -
      </Box>
    </Fragment>
  ) : null;
};
export default Navigator;