const Quotes = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex justify-center items-center p-4">
            <div className="max-w-md mx-auto">
                <blockquote className="text-xl font-medium">
                    "The customer service I received was exceptional. The support team went above and beyond to address my
                    concerns."
                </blockquote>
                <div className="mt-4">
                    <p className="font-semibold">Jules Winnifield</p>
                    <p className="text-sm text-muted-foreground">CEO, Acme Inc</p>
                </div>
            </div>        
        </div>
    );
};

export default Quotes;
