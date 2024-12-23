import FooterColumn from "./FooterColumn";
import { footerColumns } from "@/app/constants";

const FooterRow = () => {
  return (
    <>
      {footerColumns?.map(({ category, links }, key) => (
        <FooterColumn category={category} links={links} key={key} />
      ))}
    </>
  );
};

export default FooterRow;
