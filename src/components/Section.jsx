import { CardSectionAgents } from "./CardSectionAgents"
import { CardSectionMaps } from "./CardSectionMaps"
import { SectionInfo } from "./SectionInfo"

export function Section() {
    return (
        <>
            <div>
                <SectionInfo />
            </div>
            <div className="mt-10">
                <div>
                    <CardSectionAgents />
                    <CardSectionMaps />
                </div>
            </div>
        </>
    )
}