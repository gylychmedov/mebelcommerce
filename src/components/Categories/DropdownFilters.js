import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const DropdownFilters = () => {
  const { t } = useTranslation("common");
  return (
    <aside>
      <div className="">{t("categories")}</div>
    </aside>
  );
};

export default DropdownFilters;
