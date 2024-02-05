import { CardSectionAgents } from "./CardSectionAgents"
import { CardSectionMaps } from "./CardSectionMaps"
import { Link } from "react-router-dom"

export function Section() {
    return (
        <>

            <div className="mt-10">
                <div>
                    <CardSectionAgents/>
                    <CardSectionMaps />
                    {/* <CardSection titulo={"Mapas"} imagen={'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'} />
                    <CardSection titulo={"Armas"} imagen={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3b9d019e6a99c32a/5fd2c35890483e3eb51c30d1/ValorantWallpaper_Oni.jpg'} />
                    <CardSection titulo={"Modos"} imagen={"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d9bf296c46d42d2/5ece177408ac190a51c69e59/Beta_Key_Art_VALORANT_Lightbox.jpg"} /> */}
                </div>
            </div>
        </>
    )
}