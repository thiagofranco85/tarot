import { Navigate, NavLink, useLocation } from "react-router";
import { FormatResponse } from "../../components/format-response/FormatResponse";
import { Text } from "../../components/text/Text";
import { PageTitle } from "../../layout-components/PageTitle";

export function Answer() {

    const location = useLocation();

    const response = location.state?.response;
    const origin = location.state?.origin;

    if (!response) {
        return <Navigate to="/" replace />;
    }

    return (
        <section className="group">
            <PageTitle>Interpretação da Tiragem</PageTitle>
            <div className="bg-background-2/50 p-6 rounded-lg shadow-md">
                <FormatResponse response={response} />
            </div>

            <Text
                as="button"
                variant={"title-xs"}
                className="
                m-auto block
                px-5 py-1.5 mt-4 rounded-full
                group-hover:text-hover-primary 
                transition-transform duration-200
                border-1
                border-transparent 
                animate-border 
                bg-background-1/50
                group-hover:[background:linear-gradient(45deg,var(--color-primary),var(--color-primary))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.zinc.600/.48))_border-box]
            "
            >
                <NavLink to={`/${origin}`} title={"Quero realizar outra tiragem"}>
                    Quero realizar outra tiragem!
                </NavLink>
            </Text>
        </section>
    );
}