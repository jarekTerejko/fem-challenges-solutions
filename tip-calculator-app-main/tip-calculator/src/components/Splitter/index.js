import { useState } from "react";
import {
  InputFullWidthEl,
  InputFullWidthWrapper,
  ResultAmount,
  ResultHeading,
  ResultHeadingBottom,
  ResultHeadingTop,
  ResultWrapper,
  SplitterContent,
  SplitterContentColLeft,
  SplitterContentColRight,
  SplitterElementsHeading,
  TipPercentBtn,
  TipPercentBtnWrapper,
  ErrorMsg,
  ResetBtn,
  PercentForm,
  InputImage,
} from "./SplitterElements";
import IconDollar from "../../images/icon-dollar.svg";
import IconPerson from "../../images/icon-person.svg";

const Splitter = () => {
  const [inputValues, setInputValues] = useState({
    billValue: "",
    peopleValue: "",
    customPercent: "",
  });

  const hadleInputChange = (e) => {
    if (isCounting) {
      setIsCounting(false);
    }
    if (isPeopleError) {
      setIsPeopleError(false);
    }
    if (isBillError) {
      setIsBillError(false);
    }

    resetCountingValues();
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const [tipAmount, setTipAmount] = useState(null);
  const [personTipAmount, setPersonTipAmount] = useState(null);
  const [totalPersonAmount, setTotalPersonAmount] = useState(null);
  const [billPlusTip, setbillPlusTip] = useState(null);
  const [isCounting, setIsCounting] = useState(false);
  const [isBillError, setIsBillError] = useState(false);
  const [isPeopleError, setIsPeopleError] = useState(false);

  const resetCountingValues = () => {
    setPersonTipAmount(null);
    setTotalPersonAmount(null);
    setbillPlusTip(null);
    setTipAmount(null);
  };

  const buttons = ["5%", "10%", "15%", "25%", "50%"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.name === "percentForm" && inputValues.customPercent) {
      countTip(e);
    }
  };

  const countTip = (e) => {
    setIsCounting(true);

    let tipNumber;

    tipNumber =
      e.target.name === "percentForm"
        ? parseInt(inputValues.customPercent) / 100
        : parseInt(e.target.innerText.slice(0, -1)) / 100;

    const billNumber = parseFloat(inputValues.billValue);
    const peopleNumber = parseFloat(inputValues.peopleValue);

    if (
      billNumber === 0 ||
      peopleNumber === 0 ||
      !billNumber ||
      !peopleNumber
    ) {
      if (billNumber === 0) {
        setIsBillError(true);
      }
      if (!billNumber) {
        setIsBillError(true);
      }
      if (peopleNumber === 0) {
        setIsPeopleError(true);
      }
      if (!peopleNumber) {
        setIsPeopleError(true);
      }
      return;
    } else {
      setTipAmount((billNumber * tipNumber).toFixed(2));

      setPersonTipAmount(
        parseFloat((billNumber * tipNumber) / peopleNumber).toFixed(2)
      );

      setTotalPersonAmount(
        (
          (billNumber * tipNumber) / peopleNumber +
          billNumber / peopleNumber
        ).toFixed(2)
      );

      setbillPlusTip((billNumber + billNumber * tipNumber).toFixed(2));
    }
  };

  const resetValues = () => {
    setInputValues({
      billValue: "",
      peopleValue: "",
      customPercent: "",
    });
    setPersonTipAmount(null);
    setTotalPersonAmount(null);
    setbillPlusTip(null);
    setTipAmount(null);
    setIsCounting(false);
    setIsPeopleError(false);
    setIsBillError(false);
  };

  return (
    <>
      <SplitterContent>
        <SplitterContentColLeft>
          <SplitterElementsHeading>Bill</SplitterElementsHeading>
          <InputFullWidthWrapper isBillError={isBillError}>
            {isCounting && inputValues.billValue === "" && (
              <ErrorMsg>Can't be empty</ErrorMsg>
            )}
            {isCounting && inputValues.billValue === "0" && (
              <ErrorMsg>Can't be zero</ErrorMsg>
            )}
            <InputImage src={IconPerson} />
            <InputFullWidthEl
              type="number"
              value={inputValues.billValue}
              name="billValue"
              onChange={(e) => hadleInputChange(e)}
              placeholder="0"
              min="0"
            />
          </InputFullWidthWrapper>
          <SplitterElementsHeading>Select Tip %</SplitterElementsHeading>
          <TipPercentBtnWrapper>
            {buttons.map((btn) => (
              <TipPercentBtn key={btn} onClick={(e) => countTip(e)}>
                {btn}
              </TipPercentBtn>
            ))}
            <PercentForm
              name="percentForm"
              onSubmit={handleSubmit}
              data-text="Type custom percent number and push Enter"
            >
              <InputFullWidthEl
                customPercent
                type="number"
                placeholder="Custom"
                min="1"
                name="customPercent"
                value={inputValues.customPercent}
                onChange={(e) => hadleInputChange(e)}
              />
            </PercentForm>
          </TipPercentBtnWrapper>
          <SplitterElementsHeading>Number of People</SplitterElementsHeading>
          <InputFullWidthWrapper isPeopleError={isPeopleError}>
            <InputImage src={IconDollar} />
            {isCounting && inputValues.peopleValue === "" && (
              <ErrorMsg>Can't be empty</ErrorMsg>
            )}
            {isCounting && inputValues.peopleValue === "0" && (
              <ErrorMsg>Can't be zero</ErrorMsg>
            )}
            <InputFullWidthEl
              type="number"
              value={inputValues.peopleValue}
              name="peopleValue"
              onChange={(e) => hadleInputChange(e)}
              placeholder="0"
              min="0"
            />
          </InputFullWidthWrapper>
        </SplitterContentColLeft>
        <SplitterContentColRight>
          <ResultWrapper>
            <ResultHeading>
              <ResultHeadingTop>Tip Amount</ResultHeadingTop>
              <ResultHeadingBottom>/ person</ResultHeadingBottom>
            </ResultHeading>
            <ResultAmount>
              {personTipAmount ? `$${personTipAmount}` : `$0.00`}
            </ResultAmount>
          </ResultWrapper>
          <ResultWrapper>
            <ResultHeading>
              <ResultHeadingTop>Total</ResultHeadingTop>
              <ResultHeadingBottom>/ person</ResultHeadingBottom>
            </ResultHeading>
            <ResultAmount>
              {totalPersonAmount ? `$${totalPersonAmount}` : `$0.00`}
            </ResultAmount>
          </ResultWrapper>
          <ResultWrapper>
            <ResultHeading>
              <ResultHeadingTop>Tip Amount</ResultHeadingTop>
              <ResultHeadingBottom>not splitted</ResultHeadingBottom>
            </ResultHeading>
            <ResultAmount>{tipAmount ? `$${tipAmount}` : `$0.00`}</ResultAmount>
          </ResultWrapper>
          <ResultWrapper>
            <ResultHeading>
              <ResultHeadingTop>Total</ResultHeadingTop>
              <ResultHeadingBottom>not splitted</ResultHeadingBottom>
            </ResultHeading>
            <ResultAmount>
              {billPlusTip ? `$${billPlusTip}` : `$0.00`}
            </ResultAmount>
          </ResultWrapper>
          <ResetBtn
            disabled={
              inputValues.billValue === "" &&
              inputValues.peopleValue === "" &&
              inputValues.customPercent=== "" 
            }
            onClick={resetValues}
          >
            Reset
          </ResetBtn>
        </SplitterContentColRight>
      </SplitterContent>
    </>
  );
};

export default Splitter;
