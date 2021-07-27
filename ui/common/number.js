let numberFormatter = false;
export const numberFormat = (n) => {
    if (numberFormatter === false)
        numberFormatter = window.Intl && Intl.NumberFormat ? new Intl.NumberFormat() : null;
    if (numberFormatter === null)
        return '' + n;
    return numberFormatter.format(n);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL251bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLGVBQWUsR0FBcUMsS0FBSyxDQUFDO0FBRTlELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQVMsRUFBRSxFQUFFO0lBQ3hDLElBQUksZUFBZSxLQUFLLEtBQUs7UUFBRSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25ILElBQUksZUFBZSxLQUFLLElBQUk7UUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImxldCBudW1iZXJGb3JtYXR0ZXI6IGZhbHNlIHwgSW50bC5OdW1iZXJGb3JtYXQgfCBudWxsID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBudW1iZXJGb3JtYXQgPSAobjogbnVtYmVyKSA9PiB7XG4gIGlmIChudW1iZXJGb3JtYXR0ZXIgPT09IGZhbHNlKSBudW1iZXJGb3JtYXR0ZXIgPSB3aW5kb3cuSW50bCAmJiBJbnRsLk51bWJlckZvcm1hdCA/IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpIDogbnVsbDtcbiAgaWYgKG51bWJlckZvcm1hdHRlciA9PT0gbnVsbCkgcmV0dXJuICcnICsgbjtcbiAgcmV0dXJuIG51bWJlckZvcm1hdHRlci5mb3JtYXQobik7XG59O1xuIl19