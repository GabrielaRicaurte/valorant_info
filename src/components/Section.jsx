import { CardSection } from "./CardSection"

export function Section() {
    return ( 
        <>
            <div className="mt-10">
                <div className="mx-10 p-10 grid grid-cols-2 gap-5">
                    <CardSection titulo={"Agentes"} imagen={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt05b6f34806210a43/65a9be2b7fc0001446223f49/Val_Ep7_PatchNotes_8.1.jpg'}/>
                    <CardSection titulo={"Mapas"} imagen={'https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png'}/>
                    <CardSection titulo={"Armas"} imagen={'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3b9d019e6a99c32a/5fd2c35890483e3eb51c30d1/ValorantWallpaper_Oni.jpg'}/>
                    <CardSection titulo={"Modos"} imagen={"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d9bf296c46d42d2/5ece177408ac190a51c69e59/Beta_Key_Art_VALORANT_Lightbox.jpg"}/>
                </div>
            </div>
        </>
    ) 
}