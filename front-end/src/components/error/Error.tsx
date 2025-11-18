import { Text } from "./../text/Text";

export function Error({ className, children }: { className?: string; children?: React.ReactNode }) {
    return (
        <Text
            as="span"
            variant={"body-xs"}
            weight={"light"}
            className={`bg-red-500 text-white py-1 px-3 rounded-sm ${className}`}
        >
            {children}
        </Text>
    )

}