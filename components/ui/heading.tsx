interface HeadingProps {
    title: string
}

const Heading: React.FC<HeadingProps> = ({
    title
}) => {
    return (
        <div
            className="w-full flex items-center justify-center"
        >
            <h3
                className="uppercase tracking-[20px] text-neutral-400 text-2xl pl-[20px] mt-16 md:mt-0 lg:mt-5 "
            >
                {title}
            </h3>
        </div>
  )
}

export default Heading