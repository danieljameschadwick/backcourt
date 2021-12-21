import Head from "next/head";
import { Player } from "@src/util/type/Player";
import currencyFormatter from "@src/util/currencyFormatter";
import _404 from "@src/pages/404";
import { HttpStatus } from "@src/util/HttpStatus";
import { Formik } from "formik";
import * as Yup from "yup";
import { AttributeNameHandleMap } from "@src/util/enum/AttributeEnum";
import { formatAttributes } from "@src/util/attributesFormatter";

const PlayerAttributeSchema = Yup.object().shape({
    strength: Yup.number().required("Required"),
    speed: Yup.number().required("Required"),
    jump: Yup.number().required("Required"),
    stamina: Yup.number().required("Required"),
    insideShot: Yup.number().required("Required"),
    dunk: Yup.number().required("Required"),
    freeThrow: Yup.number().required("Required"),
    midRangeShot: Yup.number().required("Required"),
    threePointShot: Yup.number().required("Required"),
    passing: Yup.number().required("Required"),
    ballControl: Yup.number().required("Required"),
    offensiveIq: Yup.number().required("Required"),
    defensiveIq: Yup.number().required("Required"),
    defensiveRebounding: Yup.number().required("Required"),
    rebounding: Yup.number().required("Required"),
});

type Props = {
    player: Player | null;
};

const PlayerAdminDetail: React.FC<Props> = ({ player }: Props) => {
    const handlePost = async (id: string, attributeValues: object) => {
        const attributesDTO = [];

        for (const attributeHandle of Object.keys(attributeValues)) {
            const attribute = attributeValues[attributeHandle];

            attributesDTO.push({
                name: AttributeNameHandleMap[attributeHandle],
                value: attribute,
            });
        }

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({attributes: attributesDTO}),
        };

        const response = await fetch(`${process.env.API}/player/${id}`, requestOptions);

        if (response.status !== 200) {
            return;
        }

        alert("Updated");
    };

    if (!player) {
        return (
            <_404 message="Player not found." />
        );
    }

    const {
        id,
        firstName,
        lastName,
        team,
        dateOfBirth,
        age,
        contract: { salaryPerYearDollar, yearsLeft } = {},
        attributes = [],
    } = player;

    const filteredAttributes = formatAttributes(attributes);

    return (
        <div>
            <Head>
                <title>Backcourt | Admin | {firstName} {lastName}, {team ? team.name : "Free Agent"}</title>
                <meta name={"description"} content={`${firstName} ${lastName}'s Page`} />
                <link rel={"icon"} href={"/favicon.ico"} />
            </Head>

            <main>
                <div className={"container"}>
                    <h1>{firstName} {lastName}</h1>

                    <ul>
                        <li>{dateOfBirth}</li>
                        <li>{age}</li>
                        <li>{team ? team.name : "Free Agent"}</li>
                        {player.contract ? (
                            <li>{currencyFormatter.format(salaryPerYearDollar)} / {yearsLeft} years</li>
                        ) : ""}
                    </ul>
                </div>

                <div className={"container"}>
                    <h2>Attributes</h2>

                    <Formik
                        initialValues={{
                            strength: filteredAttributes['strength'].value,
                            speed: filteredAttributes['speed'].value,
                            jump: filteredAttributes['jump'].value,
                            stamina: filteredAttributes['stamina'].value,
                            insideShot: filteredAttributes['insideShot'].value,
                            dunk: filteredAttributes['dunk'].value,
                            freeThrow: filteredAttributes['freeThrow'].value,
                            midRangeShot: filteredAttributes['midRangeShot'].value,
                            threePointShot: filteredAttributes['threePointShot'].value,
                            passing: filteredAttributes['passing'].value,
                            ballControl: filteredAttributes['ballControl'].value,
                            offensiveIq: filteredAttributes['offensiveIq'].value,
                            defensiveIq: filteredAttributes['defensiveIq'].value,
                            defensiveRebounding: filteredAttributes['defensiveRebounding'].value,
                            rebounding: filteredAttributes['rebounding'].value,
                        }}
                        validationSchema={PlayerAttributeSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handlePost(id, values);
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            errors,
                            touched,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h3>Athleticism</h3>

                                <div>
                                    <label>Strength:</label>

                                    <input
                                        type={"number"}
                                        name={"strength"}
                                        onChange={handleChange}
                                        value={values.strength}
                                    />

                                    {errors.strength && touched.strength ? (
                                        <div>{errors.strength}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Speed:</label>

                                    <input
                                        type={"number"}
                                        name={"speed"}
                                        onChange={handleChange}
                                        value={values.speed}
                                    />

                                    {errors.speed && touched.speed ? (
                                        <div>{errors.speed}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Jump:</label>

                                    <input
                                        type={"number"}
                                        name={"jump"}
                                        onChange={handleChange}
                                        value={values.jump}
                                    />

                                    {errors.jump && touched.jump ? (
                                        <div>{errors.jump}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Stamina:</label>

                                    <input
                                        type={"number"}
                                        name={"stamina"}
                                        onChange={handleChange}
                                        value={values.stamina}
                                    />

                                    {errors.stamina && touched.stamina ? (
                                        <div>{errors.stamina}</div>
                                    ) : null}
                                </div>

                                <h3>Finishing</h3>

                                <div>
                                    <label>Inside Shot:</label>

                                    <input
                                        type={"number"}
                                        name={"insideShot"}
                                        onChange={handleChange}
                                        value={values.insideShot}
                                    />

                                    {errors.insideShot && touched.insideShot ? (
                                        <div>{errors.insideShot}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label>Dunk:</label>

                                    <input
                                        type={"number"}
                                        name={"dunk"}
                                        onChange={handleChange}
                                        value={values.dunk}
                                    />

                                    {errors.dunk && touched.dunk ? (
                                        <div>{errors.dunk}</div>
                                    ) : null}
                                </div>

                                <h3>Shooting</h3>

                                <div>
                                    <label>Free Throw:</label>

                                    <input
                                        type={"number"}
                                        name={"freeThrow"}
                                        onChange={handleChange}
                                        value={values.freeThrow}
                                    />

                                    {errors.freeThrow && touched.freeThrow ? (
                                        <div>{errors.freeThrow}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Mid Range Shot:</label>

                                    <input
                                        type={"number"}
                                        name={"midRangeShot"}
                                        onChange={handleChange}
                                        value={values.midRangeShot}
                                    />

                                    {errors.midRangeShot && touched.midRangeShot ? (
                                        <div>{errors.midRangeShot}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Three Point Shot:</label>

                                    <input
                                        type={"number"}
                                        name={"threePointShot"}
                                        onChange={handleChange}
                                        value={values.threePointShot}
                                    />

                                    {errors.threePointShot && touched.threePointShot ? (
                                        <div>{errors.threePointShot}</div>
                                    ) : null}
                                </div>

                                <h3>Offense</h3>

                                <div>
                                    <label>Passing:</label>

                                    <input
                                        type={"number"}
                                        name={"passing"}
                                        onChange={handleChange}
                                        value={values.passing}
                                    />

                                    {errors.passing && touched.passing ? (
                                        <div>{errors.passing}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Ball Control:</label>

                                    <input
                                        type={"number"}
                                        name={"ballControl"}
                                        onChange={handleChange}
                                        value={values.ballControl}
                                    />

                                    {errors.ballControl && touched.ballControl ? (
                                        <div>{errors.ballControl}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Offensive IQ:</label>

                                    <input
                                        type={"number"}
                                        name={"offensiveIq"}
                                        onChange={handleChange}
                                        value={values.offensiveIq}
                                    />

                                    {errors.offensiveIq && touched.offensiveIq ? (
                                        <div>{errors.offensiveIq}</div>
                                    ) : null}
                                </div>

                                <h3>Defense</h3>

                                <div>
                                    <label>Defensive IQ:</label>

                                    <input
                                        type={"number"}
                                        name={"defensiveIq"}
                                        onChange={handleChange}
                                        value={values.defensiveIq}
                                    />

                                    {errors.defensiveIq && touched.defensiveIq ? (
                                        <div>{errors.defensiveIq}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Defensive Rebounding:</label>

                                    <input
                                        type={"number"}
                                        name={"defensiveRebounding"}
                                        onChange={handleChange}
                                        value={values.defensiveRebounding}
                                    />

                                    {errors.defensiveRebounding && touched.defensiveRebounding ? (
                                        <div>{errors.defensiveRebounding}</div>
                                    ) : null}
                                </div>

                                <div>
                                    <label>Rebounding:</label>

                                    <input
                                        type={"number"}
                                        name={"rebounding"}
                                        onChange={handleChange}
                                        value={values.rebounding}
                                    />

                                    {errors.rebounding && touched.rebounding ? (
                                        <div>{errors.rebounding}</div>
                                    ) : null}
                                </div>

                                <button type="submit" disabled={isSubmitting}>
                                    Save
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </main>
        </div>
    );
};

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const playerResponse = await fetch(`${process.env.API}/player/${params.id}`);
    const player = playerResponse.status === HttpStatus.OK
        ? await playerResponse.json()
        : null
    ;

    return {
        props: {
            player,
        },
    };
};

export default PlayerAdminDetail;