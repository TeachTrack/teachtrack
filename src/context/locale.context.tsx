/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { defaultLocale, getTranslator, ValidLocale } from "../i18n/i18n.ts";

type TranslationParams = {
  [key: string]: string | number;
};

interface ITranslationContext {
  t: (key: string, params?: TranslationParams) => ReactNode;
  setLang: (lang: ValidLocale) => void;
  lang: ValidLocale;
}

interface ITranslationProps {
  children: ReactNode;
}

const LocaleContext = createContext<ITranslationContext>({} as ITranslationContext);

export const useLocaleContext = () => useContext(LocaleContext);

function useDelayedRender<T>(asyncFun: () => Promise<T>, deps: any = []) {
  const [output, setOutput] = useState<T>();

  useEffect(() => {
    (async () => {
      try {
        setOutput(await asyncFun());
      } catch (e) {
        console.error(e);
      }
    })();
  }, deps);

  return output === undefined ? null : output;
}

export const LocaleContextProvider = ({ children }: PropsWithChildren<ITranslationProps>) => {
  const [lang, setLang] = useLocalStorage<ValidLocale>("lang", defaultLocale);
  const currentLang = lang || defaultLocale;

  return useDelayedRender(async () => {
    const translate = await getTranslator(currentLang, []);
    const value = {
      t: translate,
      setLang,
      lang: currentLang,
    };

    return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
  }, [currentLang]);
};
