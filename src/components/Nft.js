import React from 'react'

export default function Nft() {
    return (
        <>
            <div className="container-md flex">
                <img src="/Machine.jpg" alt="" width="500px" className='silverborder img-fluid' />
                <div className="container-md navtext m-5">
                    <p>invesment option</p>
                    <h2 className='weight'>COMMON SHARE</h2>
                    <p className='brake'></p>
                    <div className="flex">
                        <table>
                            <thead>
                                <tr>
                                    <td>project:</td>
                                    <td>owned by:</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Glitch</th>
                                    <th>Parzival</th>
                                </tr>
                            </tbody>
                        </table>
                        <p>Follow NFT</p>
                    </div>
                    <p className='brake mt-2'></p>


                    <div className=' container-md navtext silverborderr mt-5'>
                        <p className='between'>Sale ends on 20 june, 2022 at 10:30pm, GMT +5:30</p>
                        <p className='brake'></p>
                        <table>
                            <thead>
                                <tr>
                                    <td>current price:</td>
                                    <td>units available:</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='weight'>$500</th>
                                    <th className='weight'>$50</th>
                                </tr>
                            </tbody>
                        </table>
                        <p className='zindex'>Select how you want to pay:</p>
                        <table className='stripe'>
                            <tr>
                                <td className='hover'>stripe</td>
                                <td className='hover'><img src="/paypal.png" alt="" width="130px"></img>
                                </td>
                            </tr>
                        </table>
                        <div className='checkgap'>
                            <input type="checkbox" name="" id="" />I understand the terms and risks in buying this NFT
                        </div>
                        <table className='mb-2'>
                            <tr>
                                <td> <button className='button'>Buy Now</button> </td>
                                <td><button className='button'> Request call back </button></td>
                            </tr>
                        </table>
                    </div>

                </div>

            </div>
        </>
    )
}
