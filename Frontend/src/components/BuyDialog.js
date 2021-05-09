import { useState } from 'react';
import styled from 'styled-components';
import CancelIcon from '../resources/cancel.png';

// currentRate:number, onClose:func, onBuyClicked(text):func
export default function BuyDialog(props){
    const [price, setPrice] = useState(props.currentRate);
    const [stocks, setStocks] = useState(0);
    return(
        <OuterContainer >
            <Backdrop />
            <Dialog>
                <InnerDialog>
                    <Heading>Reliance Industries</Heading>
                    <Label style={{marginTop: "20px"}}>Max price to buy at:</Label>
                    <Input onChange={(event) => setPrice(event.target.value)} value={price} type="number" onKeyPress={(event) => {
                        return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57
                    }}/>
                    <Ether>Ether</Ether>
                    <Label>Stocks to buy:</Label>
                    <Input onChange={(event) => setStocks(event.target.value)} value={stocks} type="number" onKeyPress={(event) => {
                        return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57
                    }}/>
                    <Ether>Stocks</Ether>
                    <Desc>Max price should be greater or equal to Current Market Price</Desc>
                    <Desc>Your wallet will be debited now by the full amount and after the transaction, the remaining amount if any will be refunded back immediately.</Desc>
                </InnerDialog>
                <ActionBtn onClick={() => props.onBuyClick(stocks, price)}>BUY</ActionBtn>     
            </Dialog>
            <CloseBtn src={CancelIcon} onClick={() => props.onClose()}></CloseBtn>
        </OuterContainer>
    )
}

const OuterContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Backdrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const Dialog = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25);
    z-index: 5;
`;

const InnerDialog = styled.div`
    width: calc(100% - 40px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ActionBtn = styled.button`
    border: none;
    background-color: var(--main-color);
    color: white;
    font-size: 1em;
    padding: 15px;
    text-align: center;
    width: 100%;

    :hover{
        cursor: pointer;
    }
`;

const Heading = styled.h1`
    font-size: 1.4em;
    color: black;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 1px solid black;
`;

const Label = styled.label`
    font-size: 0.8em;
    color: black;
    font-weight: 600;
    margin-bottom: 5px;
`;

const Input = styled.input`
    border: 1px solid var(--main-color);
    background-color: transparent;
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 1.1em;
    color: black;

    ::placeholder{
        color: gray;
    }
`

const Ether = styled.p`
    color: gray;
    font-size: 1.1em;
    position: relative;
    transform: translateY(-150%) translateX(-10px);
    align-self: flex-end;
`;

const Desc = styled.p`
    color: gray;
    font-size: 0.7em;
`;

const CloseBtn = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 20px;
    padding: 15px;
    object-fit: contain;
    object-position: center;
    z-index: 5;
    border-radius: 50px;
    background-color: rgba(255, 255, 255);

    :hover{
        cursor: pointer;
    }
`;