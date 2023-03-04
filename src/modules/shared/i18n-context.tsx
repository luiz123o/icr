import { createContext, ReactNode, useContext, useMemo } from "react";

import {
  useTranslation as nativeUseTranslation,
  TFunction,
} from "next-i18next";

interface I18nProps {
  children: ReactNode;
  useTranslation: typeof nativeUseTranslation;
}

interface ContextData {
  useTranslation: (namespace: string | string[]) => {
    t: (str: string) => string;
  };
}

const I18nContext = createContext<ContextData | null>(null);

export function I18nProvider({
  children,
  useTranslation: i18nUseTranslation,
}: I18nProps) {
  const sharedState = useMemo(
    () => ({
      useTranslation: (namespace: string | string[]) =>
        i18nUseTranslation(namespace),
    }),
    [i18nUseTranslation]
  );

  return (
    <I18nContext.Provider value={sharedState}>{children}</I18nContext.Provider>
  );
}

export function useTranslation(namespace: string | string[]) {
  const { i18n } = nativeUseTranslation();
  const context = useContext(I18nContext);

  return context?.useTranslation(namespace) as {
    t: TFunction;
    i18n: typeof i18n;
  };
}
