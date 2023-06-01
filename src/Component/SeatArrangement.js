import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getScreenArrangement } from '../store/screen/screenAction'
import Navbar from './Navbar'
import { bookMovie } from '../store/Booking/bookingAction'

const SeatArrangement = (props) => {

    const location = useLocation()

    console.log("location", location.state)

    useEffect(() => {
        props.getScreenArrangement(location.state)
    }, [])

    const { seat } = useSelector((state) => state.screen);

    console.log("seat", seat)

    const [seatArrangement, setSeatArrangement] = useState([])

    useEffect(() => {
        setSeatArrangement(seat)
    }, [seat])




    const findBestSeats = (seatValues, requiredSeats, requestedRow = null) => {
        const rows = seatValues.length;
        const seatsPerRow = seatValues[0].length;

        const seatOptions = [];

        // Iterate over each row
        for (let row = 0; row < rows; row++) {
            if (requestedRow !== null && row !== requestedRow) {
                continue; // Skip rows if a specific row is requested
            }

            let groupStart = -1;
            let currentGroup = [];

            // Iterate over each seat in the row
            for (let seat = 0; seat < seatsPerRow; seat++) {
                if (seatValues[row][seat].status === 0) {
                    if (groupStart === -1) {
                        groupStart = seat;
                    }
                    currentGroup.push(seat);

                    if (currentGroup.length === requiredSeats) {
                        seatOptions.push({ row, seats: currentGroup });
                        currentGroup = [];
                        groupStart = -1;

                        if (requestedRow !== null) {
                            break; // Stop iteration if a specific row is requested
                        }
                    }
                } else {
                    currentGroup = [];
                    groupStart = -1;
                }
            }
        }

        // Sort seat options based on criteria (e.g., number of empty seats, distance from center)
        seatOptions.sort((a, b) => {
            const emptySeatsA = countEmptySeats(seatValues[a.row], a.seats);
            const emptySeatsB = countEmptySeats(seatValues[b.row], b.seats);
            if (emptySeatsA !== emptySeatsB) {
                return emptySeatsA - emptySeatsB;
            } else {
                const centerA = Math.abs(seatsPerRow / 2 - a.seats[0]);
                const centerB = Math.abs(seatsPerRow / 2 - b.seats[0]);
                return centerA - centerB;
            }
        });

        if (seatOptions.length > 0) {
            return seatOptions[0];
        }

        return null; // No suitable group found
    };

    const countEmptySeats = (row, seats) => {
        let emptySeats = 0;
        for (let seat of seats) {
            if (row[seat].status === 0) {
                emptySeats++;
            }
        }
        return emptySeats;
    };



    const [rowNo, setRowNo] = useState(0);
    const [noOfSeat, setNoOfSeat] = useState(0);

    let columns = [];



    const handleClick = () => {


        const bestSeats = findBestSeats(seatArrangement?.screenDesign, parseInt(noOfSeat), parseInt(rowNo));

        if (bestSeats) {
            console.log('Best seats:');
            for (let seat of bestSeats.seats) {
                console.log(`Row ${bestSeats.row + 1}, Seat ${seatArrangement?.screenDesign[bestSeats.row][seat].seat}`);
                columns.push(seatArrangement?.screenDesign[bestSeats.row][seat].seat)
            }
        } else {
            console.log('No suitable group of seats found.');
            alert(`Sorry, there are not enough contiguous seats available for ${noOfSeat} people in row ${rowNo}.`);
        }

        alert(`Seat: Row ${rowNo + 1}, Column ${columns}`)
        console.log("columns", columns)

     
        const response = {
            "screenId": seat._id,
            "row": rowNo,
            "column": columns,
            "movieId": seat.movieId,
            "userId": "646b4001ebc9603b9be16df7",
        }

        console.log("response", response)

        props.bookMovie(response)

        columns = []
    }



    return (
        <>

            <Navbar />
            <div className="row">
                <div className="col-8">
                    <div className='d-flex justify-content-center m-5' style={{ height: "20px" }}>
                        <div style={{ height: "30px", background: "#000", width: "200px", color: "#fff" }}>
                            Screen
                        </div>
                    </div>

                    <div className="seatStructure">
                        <center>
                            <table id="seats" style={{ padding: '5px', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <tbody>
                                    {seatArrangement?.screenDesign?.map((row, rowIndex) => {
                                        return (
                                            <>

                                                <tr key={rowIndex} style={{ padding: '5px', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <td className='text-white' style={{ fontSize: "20px" }}> {String.fromCharCode(65 + (rowIndex))}</td>
                                                    {row.map((seat, seatIndex) => (
                                                        <td
                                                            key={seatIndex}
                                                            // onClick={() => handleSeatClick(rowIndex, seatIndex)}
                                                            style={{
                                                                height: '35px',
                                                                width: '35px',
                                                                padding: '3px',
                                                                marginLeft: '25px',
                                                                background: seat.seat !== '' && seat.seat !== '----' ? (seat.status === 1 ? '#000' : '#9DA3B4') : 'transparent',
                                                                borderRadius: '50%',
                                                                textAlign: 'center',
                                                                color: '#fff',
                                                            }}
                                                        >
                                                            {seat.seat}
                                                        </td>
                                                    ))}
                                                </tr>
                                            </>
                                        )
                                    }
                                    )}
                                </tbody>
                            </table>
                        </center>
                    </div>

                    {/* <table>

                        {seatArrangement?.screenDesign?.map((data, index) => {
                            return (
                                <>
                                    {console.log("data", data)}

                                    <tr style={{ padding: '5px', margin: '5px', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                                        {data?.map((data_) => {
                                            return (
                                                <>

                                                    {data_.seat !== "----" ? <td style={{
                                                        height: '35px',
                                                        width: '35px',
                                                        padding: '2px',
                                                        margin: '2px',
                                                        background: data_ === 1 ? '#373844' : '#9DA3B4',
                                                        borderRadius: '50%',
                                                        textAlign: "center",
                                                        color: "#fff"
                                                    }}>
                                                        {data_.seat}
                                                    </td> : <td  >
                                                        {data_.seat}
                                                    </td>}


                                                </>
                                            )
                                        })}
                                    </tr>

                            

                                </>
                            );
                        })}


                    </table> */}

                </div>

                {/* <div className="col-4">
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div class="form-group">
                                <label for="row">Row</label>
                                <input type="text" class="form-control" id="row" aria-describedby="emailHelp" placeholder="Enter Row" onChange={(e) => setRowNo(parseInt(e.target.value))} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="form-group">
                                <label for="column">No of Seat you want !!</label>
                                <input type="text" class="form-control" id="column" aria-describedby="emailHelp" placeholder="Enter Number of seat" onChange={(e) => setNoOfSeat(parseInt(e.target.value))} />
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={handleClick}>Primary</button>
                </div> */}

                <div className="col-4">
                    <div className='d-flex justify-content-center mt-5 mx-4'>
                        <div class="card" style={{ background: "#07152C" }}>
                            <div class="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div class="form-group">
                                            <label for="row" style={{ color: "#fff" }}>Row</label>
                                            <select class="form-select" aria-label="Default select example" onChange={(e) => setRowNo(e.target.value)}>
                                                <option selected disabled>Select Row</option>
                                                {
                                                    seatArrangement?.screenDesign?.map((row, rowIndex) => {
                                                        return (
                                                            <>
                                                                <option value={rowIndex}>{String.fromCharCode(65 + (rowIndex))}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div class="form-group ">
                                            <label for="column" style={{ color: "#fff" }}>No of Seat you want !!</label>
                                            <input type="text" class="form-control mt-2" id="column" aria-describedby="emailHelp" placeholder="Enter Number of seat" onChange={(e) => setNoOfSeat(parseInt(e.target.value))} />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary mt-3" onClick={handleClick}>Primary</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default connect(null, { getScreenArrangement, bookMovie })(SeatArrangement)