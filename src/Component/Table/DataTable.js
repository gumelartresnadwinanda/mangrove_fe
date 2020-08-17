import React from "react";
import { string } from 'prop-types';
import formatPrice from "../../formatPrice";

const data = [
    {
        name: 'PEPDAS',
        anggaranPagu: null,
        realisasiPagu: null
    },
    {
        name: 'Jeneberang Saddang',
        anggaranPagu: 124378249000,
        realisasiPagu: 38470040740
    },
    {
        name: 'Asahan Barumun',
        anggaranPagu: 123378249000,
        realisasiPagu: 38470040740
    },
    {
        name: 'Memberamo',
        anggaranPagu: 123378249000,
        realisasiPagu: 38470040740
    },
    {
        name: 'Serayu Opak Progo',
        anggaranPagu: 123378249000,
        realisasiPagu: 38470040740
    }
]

const data2 = [
    {
        name: 'Penyediaan Bibit Produktif pada komponen penyediaan bibit produktif',
        luaran: 'Batang',
        target: 71000,
        realisasi: 71000
    },
    {
        name: 'Penyediaan Bibit Produktif pada komponen pemeliharaan',
        luaran: 'Batang',
        target: 29000,
        realisasi: 29000
    },
    {
        name: 'Pengelolaan Sumber Benih',
        luaran: 'Butir',
        target: 578577,
        realisasi: 535277
    },
    {
        name: 'Produksi dan distribusi bibit berkualitas',
        luaran: 'Batang',
        target: 1400000,
        realisasi: 822629
    },
    {
        name: 'Ekohidrolika',
        luaran: 'Unit',
        target: 1,
        realisasi: 0
    },
    {
        name: 'Pemeliharaan dan evaluasi KBS/KBK/ASDG',
        luaran: 'Ha',
        target: 10,
        realisasi: 10
    },
    {
        name: 'Gaji dan Tunjangan',
        luaran: 'Bulan',
        target: 12,
        realisasi: 8
    },
    {
        name: 'Pendukung Pemeliharaan',
        luaran: 'Kegiatan',
        target: 1,
        realisasi: 0
    },
    {
        name: 'Gaji dan Tunjangan, operasional dan pemeliharaan kantor',
        luaran: 'Layanan',
        target: 1,
        realisasi: 0.58
    },
    {
        name: 'Penyusunan Peta Imbuhan Air Tanah',
        luaran: 'Dokumen',
        target: 1,
        realisasi: 0
    }
]

function Tables({type}) {
    if(type === 'all') {
        return (
          <div className="p-8">
              <table className="table rounded small-table">
                  <thead>
                    <tr className="rounded">
                        <th></th>
                        <th>Satker</th>
                        <th>Pagu (Anggaran)</th>
                        <th>Realisasi Pagu</th>
                        <th>% R Pagu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((x, index) => 
                        (
                            <tr key={`table-${type}-${index}`}>
                                <td className="p-8">{index + 1}. </td>
                                <td>{x.name}</td>
                                <td className="currency">Rp {formatPrice(x.anggaranPagu)}</td>
                                <td className="currency">Rp {formatPrice(x.realisasiPagu)}</td>
                                <td>{(x.realisasiPagu/x.anggaranPagu * 100).toFixed(2)}%</td>
                            </tr>    
                        )
                    )}
                  </tbody>
              </table>
          </div>
        );
    }
    return (
        <div className="p-8">
              <table className="table rounded small-table">
                  <thead>
                    <tr className="rounded">
                        <th></th>
                        <th>Nama Komponen</th>
                        <th>Luaran</th>
                        <th>Target Fisik</th>
                        <th>Realisasi Fisik</th>
                        <th>% Realisasi Fisik</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((x, index) => 
                        (
                            <tr key={`table-${type}-${index}`}>
                                <td>{index + 1}. </td>
                                <td className="currency">{x.name}</td>
                                <td className="currency">{x.luaran}</td>
                                <td className="currency">{x.target}</td>
                                <td className="currency">{x.realisasi}</td>
                                <td>{(x.realisasi/x.target * 100).toFixed(2)}%</td>
                            </tr>    
                        )
                    )}
                  </tbody>
              </table>
          </div>
    );
}


Tables.propTypes = {
    type: string
}

Tables.defaultProps = {
    type: 'all'
}

export default Tables;
