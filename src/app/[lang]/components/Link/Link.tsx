import Link from "next/link";

interface Props {
  title: string;
  link: string;
  className: string;
}

const LinkBtn = ({ link, title, className }: Props) => {
  return (
    <Link href={`${link}`} className={`${className}`}>
      {title}
    </Link>
  );
};

export default LinkBtn;
