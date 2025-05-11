interface StringInputProps {
    ClassName: string
    Placeholder: string
    Type: string
}


export default function StringInput(props: StringInputProps) {
    const StringInput = (
        <input className={props.ClassName} placeholder={props.Placeholder} type={props.Type}></input>
    )

    return StringInput
}
