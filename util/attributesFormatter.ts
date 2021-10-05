import { AttributeEnum, AttributeNameMap } from "@src/util/enum/AttributeEnum";
import { Attribute } from "@src/util/types";

export const formatAttributes = (attributes: Attribute[]) => {
    const mappedAttributes = [];
    Object.values(attributes)
        .map((attribute) => {
            mappedAttributes[AttributeNameMap[attribute.name]] = attribute;
        });

    const filteredAttributes = [];
    for (const attributeHandle of Object.keys(AttributeEnum)) {
        const attribute = mappedAttributes[AttributeNameMap[attributeHandle]];

        if (attribute) {
            filteredAttributes[AttributeNameMap[attributeHandle]] = attribute;

            continue;
        }

        filteredAttributes[AttributeNameMap[attributeHandle]] = {
            name: attributeHandle,
            value: 0,
            partial: true,
        }
    }

    return filteredAttributes;
}