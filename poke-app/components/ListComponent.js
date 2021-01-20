import React, { useState } from 'react';
import { css, jsx } from '@emotion/react'

export default function ListComponent({ pokemons }) {
    return (
        <div>
            <div
                css={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 78px;
                border-radius: 4px;
              `}>
                <table>
                    <tr>
                        <td>
                            image
                    </td>
                        <td>
                            Nama Pokemon
                    </td>
                    </tr>
                </table>
            </div>
        </div >
    )
}

export async function getStaticProps() {
    return {
        props: {
            pokemons: []
        }
    }
}






