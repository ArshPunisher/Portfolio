import React, { createContext } from "react";

interface StyleContextProps {
  isDark: boolean;
  changeTheme?: () => void;
}

const StyleContext = createContext<StyleContextProps>({ isDark: false });

export default StyleContext;
