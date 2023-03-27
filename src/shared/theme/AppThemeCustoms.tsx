import {createContext, PropsWithChildren, useContext, useState} from "react";

export interface AppThemeCustomsProps {
  customInputStyles: string;
  setCustomInputStyles: (styles: string) => void;
}

const AppThemeCustomsContext = createContext<AppThemeCustomsProps | undefined>(undefined);

export const AppThemeCustoms: React.FC<PropsWithChildren> = function ({ children }) {
  const [ customInputStyles, setCustomInputStyles ] = useState<string>('');

  return (
    <AppThemeCustomsContext.Provider value={{ customInputStyles, setCustomInputStyles }}>
      {children}
    </AppThemeCustomsContext.Provider>
  );
}

export const useAppThemeCustomStyles = function () {
  const context = useContext(AppThemeCustomsContext);

  if (context === undefined) {
    throw new Error('useAppThemeCustomStyles must be used within a AppThemeCustoms');
  }

  return context;
}
