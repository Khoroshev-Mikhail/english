import React, { useId } from "react";
import {
  SenchaGrid,
  Column,
  MoneyColumn,
  FloatColumn,
  DateColumn,
  CheckboxColumn,
} from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";


//https://sencha-grid-storybook-test.csi-infra.com/?path=/story/features-columns-header-spanning--header-spanning
export default function Sencha(props: any) {
  const id = useId()
  const dictionary = useSelector((state: RootState) => state.dictionary)

    return (
      <SenchaGrid data={dictionary} style={{ width: "700px", height: "700px" }} plugins={{ gridcellediting: true }}>
        <Column field="id" text="id"/>
        <Column field="eng" text="eng" />
        <Column field="rus" text="rus" />
        <Column editable field="groups" text="groups" />
      </SenchaGrid>
    );
  
}