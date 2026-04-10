/** @format */

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="clear-both bg-[#004599] p-0.5 text-center text-[10px] text-white">
      Copyright (C) 2005-{year} RiPPro All rights reserved.
    </div>
  );
};

export default Footer;
