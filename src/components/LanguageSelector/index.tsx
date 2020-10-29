import React from "react";

import { LanguageSelector as Selector} from "./styles"

const LanguageSelector: React.FC = () => {
  return (
    <Selector>
      {" "}
      <option value="choose-one" disabled={true}>
        Selecione seu idioma…
      </option>{" "}
      <option value="pt-BR" data-url="https://trello.com/pt-BR/signup">
        Português (Brasil)
      </option>{" "}
      <option value="cs" data-url="https://trello.com/cs/signup">
        Čeština
      </option>{" "}
      <option value="de" data-url="https://trello.com/de/signup">
        Deutsch
      </option>{" "}
      <option value="en" data-url="https://trello.com/en/signup">
        English
      </option>{" "}
      <option value="en-AU" data-url="https://trello.com/en-AU/signup">
        English (AU)
      </option>{" "}
      <option value="en-GB" data-url="https://trello.com/en-GB/signup">
        English (UK)
      </option>{" "}
      <option value="en-US" data-url="https://trello.com/en-US/signup">
        English (US)
      </option>{" "}
      <option value="es" data-url="https://trello.com/es/signup">
        Español
      </option>{" "}
      <option value="fr" data-url="https://trello.com/fr/signup">
        Français
      </option>{" "}
      <option value="it" data-url="https://trello.com/it/signup">
        Italiano
      </option>{" "}
      <option value="hu" data-url="https://trello.com/hu/signup">
        Magyar
      </option>{" "}
      <option value="nl" data-url="https://trello.com/nl/signup">
        Nederlands
      </option>{" "}
      <option value="nb" data-url="https://trello.com/nb/signup">
        Norsk (bokmål)
      </option>{" "}
      <option value="pl" data-url="https://trello.com/pl/signup">
        Polski
      </option>{" "}
      <option value="fi" data-url="https://trello.com/fi/signup">
        Suomi
      </option>{" "}
      <option value="sv" data-url="https://trello.com/sv/signup">
        Svenska
      </option>{" "}
      <option value="vi" data-url="https://trello.com/vi/signup">
        Tiếng Việt
      </option>{" "}
      <option value="tr" data-url="https://trello.com/tr/signup">
        Türkçe
      </option>{" "}
      <option value="ru" data-url="https://trello.com/ru/signup">
        Русский
      </option>{" "}
      <option value="uk" data-url="https://trello.com/uk/signup">
        Українська
      </option>{" "}
      <option value="th" data-url="https://trello.com/th/signup">
        ภาษาไทย
      </option>{" "}
      <option value="zh-Hans" data-url="https://trello.com/zh-Hans/signup">
        中文 (简体)
      </option>{" "}
      <option value="zh-Hant" data-url="https://trello.com/zh-Hant/signup">
        中文 (繁體)
      </option>{" "}
      <option value="ja" data-url="https://trello.com/ja/signup">
        日本語
      </option>{" "}
    </Selector>
  );
};

export default LanguageSelector;
