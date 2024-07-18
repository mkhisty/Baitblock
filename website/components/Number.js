export function Number({ number }) {
    return (
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex justify-center items-center border-white border-4">
            <p className="text-primary font-bold text-4xl p-6 lg:p-0">{ number }</p>
        </div>
    )
}