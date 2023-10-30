"use client";
import { useSelector } from "react-redux";
import { MainLayout } from "../components/Layouts/MainLayout";
import { RootState } from "@/redux/reducers";
import { StyledContainerCarPrice, StyledSectionCarPrice } from "./style";
import Link from "next/link";

export default function CarPrice() {
  const carPriceData = useSelector((state: RootState) => state.carPriceData);

  return (
    <main className="main-car-price">
      <MainLayout>
        <StyledSectionCarPrice>
          {carPriceData ? (
            <div>
              <h1>
                Tabela Fipe: Preço {carPriceData.Modelo}{" "}
                {carPriceData.AnoModelo}
              </h1>
              <StyledContainerCarPrice>
                <span>{carPriceData.Valor}</span>
              </StyledContainerCarPrice>
              <p>Este é o preço de compra do veículo</p>
              <Link href="/">Consultar mais preços</Link>
            </div>
          ) : (
            <>
              <p>Nenhum dado disponível.</p>
              <Link href="/">
                Fazer uma nova consulta de valor na tabele Fipe
              </Link>
            </>
          )}
        </StyledSectionCarPrice>
      </MainLayout>
    </main>
  );
}
