import CertificateCard from "./cards/CertificateCard";

const Certificates = () => {
    return (
        <>
            <h1>Certificates</h1>
            <CertificateCard 
                title="Oracle Certified Professional: Java SE 21"
                issuer="Oracle"
                year="2025"
                credentialLink="https://signon.oracle.com/signin"
            />
            <CertificateCard 
                title="Oracle Certified Professional: Gen AI"
                issuer="Oracle"
                year="2025"
                credentialLink="https://signon.oracle.com/signin"
            />
        </>
    )
}

export default Certificates;