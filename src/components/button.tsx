interface Props {
    children: React.ReactNode,
    Class?: string
}
export default function Button({ children, Class }: Props) {
    return <button className={`text-md font-martel font-light text-primary bg-secondary px-8 py-3 rounded-e-full shadow-lg ${Class}`}>
        {children}
    </button>
}