import React from 'react';
import Select from 'react-select';
import './SidebarHadith.css';


export const SidebarHadithBook = (props) => (
    <div className="ht_SelectBoxWrapper ht_bg_sky_blue mb-3">
        <div className="ht_SelectTitle">
            <h2>{props.title}</h2>
        </div>
        <div className="ht_SelectBox">
            <Select
                // value="hello"
                onChange={props.onUpdateBook}
                placeholder={props.placeholder}
                options={
                    props.hadithSidebarData.map((book) => ({
                        value: book.BookID,
                        label: book.BookNameBD
                    }))
                }
            />
        </div>
    </div>
);

export const SidebarHadithSections = (props) => {
    return(
        <div className="ht_SelectBoxWrapper ht_bg_violet mb-3">
            <div className="ht_SelectTitle">
                <h2>{props.title}</h2>
            </div>
            <div className="ht_SelectBox">
                <Select
                    // value={selectedBTOption}
                    // onChange={}
                    placeholder={props.placeholder}
                    options={
                        props.hadithSidebarData.map((bookSection) => ({
                            value: bookSection.SectionID,
                            label: bookSection.SectionBD
                        }))
                    }
                />
            </div>
        </div>
    )
};



