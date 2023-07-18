import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

const CheckoutUserForm = () => {
  return (
    <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Shipping Information
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <Label id="name" className="font-medium text-sm">Nama Lengkap</Label>
          <Input type="text" variant="secondary" name="name" hookForm={false} value="Muhammad Arief Fadhlan" placeholder="Pilih title" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="email" className="font-medium text-sm">Email</Label>
          <Input type="email" variant="secondary" name="email" hookForm={false} value="marieffadhlan@gmail.com" placeholder="contoh@gmail.com" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="phone_number" className="font-medium text-sm">Nomor Telepon</Label>
          <Input type="number" variant="secondary" name="phone_number" hookForm={false} value="08123456789" placeholder="Nomor telepon" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="address" className="font-medium text-sm">Alamat</Label>
          <Input type="number" variant="secondary" name="address" hookForm={false} value="Jalan Medan, Kecamatan Medan, Kabupaten Medan, Kota Medan, Sumatera Utara" placeholder="Alamat" readOnly disabled />
        </div>
      </div>
    </div>
  );
}

export default CheckoutUserForm;