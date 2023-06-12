import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// MUI
import { SelectChangeEvent } from '@mui/material';

export type Language = 'en' | 'es';

export default function useLanguages() {
  /*********** hooks **********/
  const { t, i18n } = useTranslation();

  /*********** functions **********/
  const translate = (value: string) => t(value);

  useEffect(() => {
    const langCode = localStorage.getItem('language')
    i18n.changeLanguage(langCode || 'en')
    // eslint-disable-next-line
  }, []);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    const langCode = event.target.value as Language;
    localStorage.setItem('language', langCode)
    i18n.changeLanguage(langCode)
  };

  return {
    language: i18n.language,
    translate,
    handleChangeLanguage
  }
}

