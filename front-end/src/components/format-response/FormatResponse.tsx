import { Text } from "../text/Text";

export function FormatResponse({ response }: { response: string }) {
    const processLine = (line: string) => {
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <p key={i} className="font-bold font-cinzel mb-2 mt-5">{part.slice(2, -2)}</p>;
            }
            return part;
        });
    };

    const formattedResponse = response.split('\n\n').map((line, index) => (
        <Text as="div" variant="body-sm" weight={"light"} key={index} className="mb-4">
            {processLine(line)}
        </Text>
    ));

    return formattedResponse;
}
