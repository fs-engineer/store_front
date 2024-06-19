import React from 'react';
import { ISelectInputDataItem } from '@/interfaces';

type Props = {
    data: ISelectInputDataItem[];
    selected: number[];
};

const CharacteristicsFormList: React.FC<Props> = ({ data, selected }) => {
    const filteredData = data.filter((item) => selected.includes(item.id));

    return <ul>{filteredData && filteredData.map((i) => <li key={i.id}>{i.name}</li>)}</ul>;
};

export default CharacteristicsFormList;
