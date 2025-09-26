import { useState } from "react"
import Button from "../../components/ui/Button"
import Select from "../../components/ui/Select"

export default function AppearanceTheme() {
    const [logoFile, setLogoFile] = useState(null)
    const [brandLogoBgColor, setBrandLogoBgColor] = useState("#1994BE")
    const [launcherPositionH, setLauncherPositionH] = useState("Right")
    const [launcherPositionV, setLauncherPositionV] = useState("Bottom")
    const [launcherOffsetH, setLauncherOffsetH] = useState("20px")
    const [launcherOffsetV, setLauncherOffsetV] = useState("20px")
    const [cardTopLeftRadius, setCardTopLeftRadius] = useState("20px")
    const [cardTopRightRadius, setCardTopRightRadius] = useState("20px")
    const [cardBottomLeftRadius, setCardBottomLeftRadius] = useState("20px")
    const [cardBottomRightRadius, setCardBottomRightRadius] = useState("20px")
    const [headingFontSize, setHeadingFontSize] = useState("26px")
    const [fontSize, setFontSize] = useState("18px")
    const [backgroundColor, setBackgroundColor] = useState("#1994BE")
    const [fontColor, setFontColor] = useState("#1994BE")

    const handleLogoUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            setLogoFile(file)
        }
    }

    const handleReset = () => {
        setLogoFile(null)
        setBrandLogoBgColor("#1994BE")
        setLauncherPositionH("Right")
        setLauncherPositionV("Bottom")
        setLauncherOffsetH("20px")
        setLauncherOffsetV("20px")
        setCardTopLeftRadius("20px")
        setCardTopRightRadius("20px")
        setCardBottomLeftRadius("20px")
        setCardBottomRightRadius("20px")
        setHeadingFontSize("26px")
        setFontSize("18px")
        setBackgroundColor("#1994BE")
        setFontColor("#1994BE")
    }

    const handleUpdate = () => {
        console.log("Updating settings:", {
            logoFile,
            brandLogoBgColor,
            launcherPositionH,
            launcherPositionV,
            launcherOffsetH,
            launcherOffsetV,
            cardTopLeftRadius,
            cardTopRightRadius,
            cardBottomLeftRadius,
            cardBottomRightRadius,
            headingFontSize,
            fontSize,
            backgroundColor,
            fontColor,
        })
        // In a real app, this would send data to a backend
    }

    // Options for select inputs
    const positionOptions = [
        { value: "Right", label: "Right" },
        { value: "Left", label: "Left" },
    ]
    const verticalPositionOptions = [
        { value: "Bottom", label: "Bottom" },
        { value: "Top", label: "Top" },
    ]
    const pxOptions = [
        { value: "0px", label: "0px" },
        { value: "10px", label: "10px" },
        { value: "20px", label: "20px" },
        { value: "30px", label: "30px" },
    ]
    const fontSizeOptions = [
        { value: "16px", label: "16px" },
        { value: "18px", label: "18px" },
        { value: "20px", label: "20px" },
        { value: "22px", label: "22px" },
        { value: "24px", label: "24px" },
        { value: "26px", label: "26px" },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-gray-800">Appearance & Theme</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Form */}
                <div className="space-y-6">
                    {/* Logo Upload */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                        <div className="flex items-center bg-orange-50 border border-orange-200 text-orange-800 px-4 py-3 rounded-lg">
                            {/* <Info className="h-5 w-5 mr-3" /> */}
                            <span className="text-sm">Logo size should be 300 X 300px</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Upload your logo</label>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                        {logoFile ? (
                                            <img
                                                src={URL.createObjectURL(logoFile) || "/placeholder.svg"}
                                                alt="Logo"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-gray-500 font-bold text-lg">m</span>
                                        )}
                                    </div>
                                    <label htmlFor="logo-upload" className="cursor-pointer">
                                        <Button as="span" className="bg-blue-500 hover:bg-blue-600 text-white">
                                            {/* <Upload className="h-4 w-4 mr-2" /> */}
                                            Upload Logo
                                        </Button>
                                        <input
                                            id="logo-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleLogoUpload}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Brand logo background color</label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={brandLogoBgColor}
                                        onChange={(e) => setBrandLogoBgColor(e.target.value)}
                                        className="h-10 w-10 rounded-lg border border-gray-300 cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={brandLogoBgColor}
                                        onChange={(e) => setBrandLogoBgColor(e.target.value)}
                                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customize the Launcher */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Customize the Launcher</h2>
                        <p className="text-sm text-gray-500">Adjust your launcher&apos;s positioning on computers and tablets:</p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Select
                                    value={launcherPositionH}
                                    onChange={(e) => setLauncherPositionH(e.target.value)}
                                    options={positionOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Select
                                    value={launcherOffsetH}
                                    onChange={(e) => setLauncherOffsetH(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Select
                                    value={launcherPositionV}
                                    onChange={(e) => setLauncherPositionV(e.target.value)}
                                    options={verticalPositionOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Select
                                    value={launcherOffsetV}
                                    onChange={(e) => setLauncherOffsetV(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card Border Radius */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Card top left Border / Card top right border radius</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Select
                                    value={cardTopLeftRadius}
                                    onChange={(e) => setCardTopLeftRadius(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Select
                                    value={cardTopRightRadius}
                                    onChange={(e) => setCardTopRightRadius(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            Card bottom left border / Card bottom right border radius
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Select
                                    value={cardBottomLeftRadius}
                                    onChange={(e) => setCardBottomLeftRadius(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <Select
                                    value={cardBottomRightRadius}
                                    onChange={(e) => setCardBottomRightRadius(e.target.value)}
                                    options={pxOptions}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Font and Color Settings */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Heading font size</label>
                                <Select
                                    value={headingFontSize}
                                    onChange={(e) => setHeadingFontSize(e.target.value)}
                                    options={fontSizeOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                                <Select
                                    value={fontSize}
                                    onChange={(e) => setFontSize(e.target.value)}
                                    options={fontSizeOptions}
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={backgroundColor}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                        className="h-10 w-10 rounded-lg border border-gray-300 cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={backgroundColor}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Font Color</label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="color"
                                        value={fontColor}
                                        onChange={(e) => setFontColor(e.target.value)}
                                        className="h-10 w-10 rounded-lg border border-gray-300 cursor-pointer"
                                    />
                                    <input
                                        type="text"
                                        value={fontColor}
                                        onChange={(e) => setFontColor(e.target.value)}
                                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <Button
                            onClick={handleReset}
                            className="px-6 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg"
                        >
                            Reset
                        </Button>
                        <Button onClick={handleUpdate} className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                            Update
                        </Button>
                    </div>
                </div>

                {/* Right Column: Preview UI */}
                <div className="relative flex items-center justify-center min-h-[600px] bg-gray-100 rounded-lg p-4 overflow-hidden">
                    <div
                        className="absolute w-full h-full bg-cover bg-center blur-sm"
                        style={{ backgroundImage: 'url("/product-image-background.jpg")' }}
                    ></div>
                    <div
                        className="relative w-80 h-[500px] bg-gray-900 rounded-xl shadow-lg overflow-hidden"
                        style={{
                            borderRadius: `${cardTopLeftRadius} ${cardTopRightRadius} ${cardBottomRightRadius} ${cardBottomLeftRadius}`,
                        }}
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between p-3" style={{ backgroundColor: brandLogoBgColor }}>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    {logoFile ? (
                                        <img
                                            src={URL.createObjectURL(logoFile) || "/placeholder.svg"}
                                            alt="Logo"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-gray-800 font-bold text-sm">m</span>
                                    )}
                                </div>
                                <span className="text-white font-semibold" style={{ fontSize: headingFontSize }}>
                                    Sony
                                </span>
                            </div>
                            <button className="text-white text-xs font-medium opacity-70 hover:opacity-100">CLOSE</button>
                        </div>

                        {/* Chat Bubble */}
                        <div className="p-4">
                            <div
                                className="bg-black text-white p-4 rounded-lg shadow-md"
                                style={{
                                    backgroundColor: backgroundColor,
                                    color: fontColor,
                                    fontSize: fontSize,
                                    borderTopLeftRadius: cardTopLeftRadius,
                                    borderTopRightRadius: cardTopRightRadius,
                                    borderBottomLeftRadius: cardBottomLeftRadius,
                                    borderBottomRightRadius: cardBottomRightRadius,
                                }}
                            >
                                <p className="mb-3" style={{ fontSize: headingFontSize }}>
                                    Which of these matters most to you in daily use?
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Fast Cooling</span>
                                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Energy Efficiency</span>
                                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">Low Noise</span>
                                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                                        Smart Features (Wi-Fi, Auto Mode, etc.)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* "Less" button */}
                        <div
                            className="absolute bottom-4 right-4 flex items-center space-x-1 bg-gray-800 text-white px-3 py-1 rounded-full text-xs cursor-pointer"
                            style={{
                                right: launcherPositionH === "Right" ? launcherOffsetH : "auto",
                                left: launcherPositionH === "Left" ? launcherOffsetH : "auto",
                                bottom: launcherPositionV === "Bottom" ? launcherOffsetV : "auto",
                                top: launcherPositionV === "Top" ? launcherOffsetV : "auto",
                            }}
                        >
                            <span className="text-purple-400">✨</span>
                            <span>Less</span>
                            {/* <ChevronUp className="h-3 w-3" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
