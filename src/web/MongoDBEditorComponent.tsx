import React,{Component} from "react";

import {FormInput} from "@kapeta/ui-web-components";

import {
    ResourceMetadata,
    ResourceConfigProps,
} from "@kapeta/ui-web-types";
import {observer} from "mobx-react";

function validateDatabaseName(fieldName:string, name:string) {
    if (!/^[a-z]([a-z0-9_-]*[a-z0-9_])?$/i.test(name)) {
        throw new Error('Invalid database name');
    }
}

@observer
class MongoDBEditorComponent extends Component<ResourceConfigProps<ResourceMetadata>> {

    private handleMetaDataChanged(name:string, value:string) {
        const metadata = Object.assign({}, this.props.metadata);
        metadata[name] = value.trim();
        this.props.onDataChanged(metadata);
    }

    render() {

        return (
            <FormInput
                name={"name"}
                value={this.props.metadata.name}
                label={"Name"}
                validation={['required', validateDatabaseName]}
                help={"Name your database"}
                onChange={(name: string, input: string) => this.handleMetaDataChanged(name, input)}
            />
        )
    }
}

export default MongoDBEditorComponent;