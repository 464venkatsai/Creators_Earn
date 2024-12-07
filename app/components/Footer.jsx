import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="flex bg-[#0d1117] text-white px-[5rem] py-[2rem] justify-between items-center">
      <h6>Copyright &copy; 2025 all rights reserved</h6>
      <div className="flex gap-10">
        <a className="bg-slate-800 hover:bg-slate-700 p-1 border-[1px] grid items-center border-slate-600" href=""><img src="git.svg" alt="" width={25}/></a>
        <a className="bg-slate-800 hover:bg-slate-700 p-1 border-[1px] grid items-center border-slate-600" href=""><img src="linkedin.svg" alt="" width={25} /></a>
        <a className="bg-slate-800 hover:bg-slate-700 p-1 border-[1px] grid items-center border-slate-600" href=""><img src="insta.svg" alt="" width={25} /></a>
      </div>
    </footer>
  );
};

export default memo(Footer);
