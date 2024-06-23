

const OderTable = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
                <div className="overflow-x-auto">
                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                        <colgroup>
                            <col className="w-5" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-5" />
                        </colgroup>
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="p-3">A-Z</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Job title</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Address</th>
                                <th className="p-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-50 border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600">A</td>
                                <td className="px-3 py-2">
                                    <p>Dwight Adams</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>UI Designer</span>
                                    <p className="text-gray-600">Spirit Media</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-873-9812</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>dwight@adams.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>71 Cherry Court, SO</p>
                                    <p className="text-gray-600">United Kingdom</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Richie Allen</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Geothermal Technician</span>
                                    <p className="text-gray-600">Icecorps</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-129-0761</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>richie@allen.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Knesebeckstrasse 32, Obersteinebach</p>
                                    <p className="text-gray-600">Germany</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b bg-gray-50 border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600">B</td>
                                <td className="px-3 py-2">
                                    <p>Alex Bridges</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Administrative Services Manager</span>
                                    <p className="text-gray-600">Smilectronics</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-238-9890</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>alex@bridges.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Hooivelden 117, Kortrijk</p>
                                    <p className="text-gray-600">Belgium</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Lynette Brown</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Camera Operator</span>
                                    <p className="text-gray-600">Surge Enterprises</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-521-5712</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>lynette@brown.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>22 rue de la Boétie, Poitiers</p>
                                    <p className="text-gray-600">France</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody className="border-b bg-gray-50 border-gray-300">
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600">C</td>
                                <td className="px-3 py-2">
                                    <p>Mariah Claxton</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Nuclear Technician</span>
                                    <p className="text-gray-600">White Wolf Brews</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-654-9810</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>mariah@claxton.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>R Oliveirinhas 71, Maia</p>
                                    <p className="text-gray-600">Portugal</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-3 text-2xl font-medium text-gray-600"></td>
                                <td className="px-3 py-2">
                                    <p>Hermila Craig</p>
                                </td>
                                <td className="px-3 py-2">
                                    <span>Production Engineer</span>
                                    <p className="text-gray-600">Cavernetworks Co.</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>555-091-8401</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>hermila@craig.com</p>
                                </td>
                                <td className="px-3 py-2">
                                    <p>Rua da Rapina 89, Espeja</p>
                                    <p className="text-gray-600">Spain</p>
                                </td>
                                <td className="px-3 py-2">
                                    <button type="button" title="Open details" className="p-1 rounded-full text-gray-400 hover:bg-gray-300 focus:bg-gray-300">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* pending table ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

            <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Invoice #</th>
                                <th className="p-3">Client</th>
                                <th className="p-3">Issued</th>
                                <th className="p-3">Due</th>
                                <th className="p-3 text-right">Amount</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Microsoft Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$15,792</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Tesla Inc.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$275</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Coca Cola co.</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$8,950,500</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                <td className="p-3">
                                    <p>97412378923</p>
                                </td>
                                <td className="p-3">
                                    <p>Nvidia Corporation</p>
                                </td>
                                <td className="p-3">
                                    <p>14 Jan 2022</p>
                                    <p className="text-gray-600">Friday</p>
                                </td>
                                <td className="p-3">
                                    <p>01 Feb 2022</p>
                                    <p className="text-gray-600">Tuesday</p>
                                </td>
                                <td className="p-3 text-right">
                                    <p>$98,218</p>
                                </td>
                                <td className="p-3 text-right">
                                    <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                        <span>Pending</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* pending table end....................... */}
        </div>
    );
};

export default OderTable;