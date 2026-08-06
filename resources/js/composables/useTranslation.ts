import { useI18n } from 'vue-i18n';

export function useTranslation() {
    const { t, locale } = useI18n();

    function changeLocale(language: string) {
        locale.value = language;
        localStorage.setItem('locale', language);
    }

    return {
        t,
        locale,
        changeLocale,
    }
}