import Link from "next/link";
import { useRouter } from "next/router";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {FaDownload,FaBackward,FaForward} from "react-icons/fa";
import {IoPlayForward} from "react-icons/io";

const PB = styled.span`
  &:hover {
    background: ${({ button }) => button.hover.background};
    color: ${({ button }) => button.hover.text};
  }
`;

const PageButton = ({ href, children, style }) => {
  const { theme } = useSelector((state) => state);
  return (
    <Link href={href}>
      <PB
        button={theme.button}
        className={`${style}    p-2 px-1 flex justify-center items-center  cursor-pointer shadow-2xl transition-all duration-500`}
      >
        {children}
      </PB>
    </Link>
  );
};

const EpisodePagiNation = ({ total, heading, episodeid }) => {
  const router = useRouter();
  const pathList = router.asPath;
  const path = pathList?.split("/");
  const page = parseInt(path?.[path?.length - 1]);
  var nxt = "";
  var prev = "";
  if (path) {
    const nextPage = page + 1;
    const prevPage = page - 1;
    if (total) {
      nxt =
        page == total
          ? null
          : (path[path.length - 1] = nextPage) && path.join("/");
      prev =
        page === 1
          ? null
          : (path[path.length - 1] = prevPage) && path.join("/");
    } else {
      nxt = (path[path.length - 1] = nextPage) && path.join("/");
      prev = (path[path.length - 1] = prevPage) && path.join("/");
    }
  }
  return (
    <div className="px-8  relative flex flex-row  w-full justify-end items-center  ">
      <div
        className={`p-3 shadow-lg rounded-sm  text-white font-bold cursor-pointer  `}
      >
        <a
          href={`https://goload.io/download?id=${episodeid}`}
          rel="noreferrer"
          target="_blank"
        >
          <FaDownload />
        </a>
      </div>
      {page === 1 ? null : (
        <PageButton style={""} href={prev} pre={true}>
          <FaBackward size={20} color="white" />
          
        </PageButton>
      )}
      {page != total ? (
        <PageButton style={""} href={nxt} pre={false}>
          
          <FaForward size={20} color="white" />
        </PageButton>
      ) : null}
    </div>
  );
};

export default EpisodePagiNation;
