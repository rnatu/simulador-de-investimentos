/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { api } from '../services/api';
import formatOption from '../utils/formatOption';
import { ApiDataType } from '../types/index';
import { formatApiResult } from '../utils/formatApiResult';

type ResultContextType = {
  setIncomeOption: (option: string) => void;
  setIndexingOption: (option: string) => void;
  handleSearchApiResult: () => void;
  simulatorResult: SimulatorResultType | undefined | null;
};

type ResultContextProviderType = {
  children: ReactNode;
};

type ApiResultaDataType = {
  data: Array<ApiDataType>;
};

type SimulatorResultType = {
  valorFinalBruto: string;
  aliquotaDoIR: string;
  valorPagoEmIR: string;
  valorFinalLiquido: string;
  valorTotalInvestido: string;
  ganhoLiquido: string;
};
export const ResultContext = createContext({} as ResultContextType);

export function ResultContextProvider({ children }: ResultContextProviderType) {
  const [incomeOption, setIncomeOption] = useState('Bruto');
  const [indexingOption, setIndexingOption] = useState('POS');
  const [simulatorResult, setSimulatorResult] =
    useState<SimulatorResultType | null>();

  const handleSearchApiResult = useCallback(async () => {
    const formattedIncomeOption = formatOption(incomeOption);
    const formattedIndexingOption = formatOption(indexingOption);

    const { data }: ApiResultaDataType = await api.get('simulacoes');

    const simulatorMatch = data.filter(
      (value) =>
        value.tipoRendimento === formattedIncomeOption &&
        value.tipoIndexacao === formattedIndexingOption,
    );

    if (simulatorMatch.length === 0) {
      setSimulatorResult(null);
      return;
    }
    const formattedApiResult = formatApiResult(simulatorMatch[0]);

    setSimulatorResult(formattedApiResult);
  }, [incomeOption, indexingOption]);

  const providerValues = useMemo(
    () => ({
      setIncomeOption,
      setIndexingOption,
      handleSearchApiResult,
      simulatorResult,
    }),
    [handleSearchApiResult, simulatorResult],
  );

  return (
    // provider do contexto AuthContext
    <ResultContext.Provider value={providerValues}>
      {children}
    </ResultContext.Provider>
  );
}
