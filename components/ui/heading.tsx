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
                className="uppercase tracking-[20px] text-neutral-400 text-2xl pl-[20px] pt-20 md:pt-0 lg:pt-5 "
            >
                {title}
            </h3>
        </div>
  )
}

export default Heading