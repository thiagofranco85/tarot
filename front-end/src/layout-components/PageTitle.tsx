import type { ReactNode } from "react";
import { Text } from "../components/text/Text";
import { HrDivider } from "./HrDivider";

export function PageTitle({ children }: { children: ReactNode }){
    return (
        <>
            <Text as="h2" variant="title-md" className="text-center">{children}</Text>
            <HrDivider className="my-4" />
        </>
    )
}